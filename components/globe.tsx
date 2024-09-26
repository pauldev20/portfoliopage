"use client";

import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useMemo,
} from "react";
import createGlobe from "cobe";

interface GlobeMarker {
    location: [number, number];
}

interface GlobeProps {
    darkMode?: boolean;
    width?: number;
    focusTime?: number;
    markers?: GlobeMarker[];
}

export type GlobeComponentRef = {
    setFocus: (lat: number, long: number) => void;
};

const GlobeComponent = forwardRef<GlobeComponentRef, GlobeProps>(
  (
    { width = 600, focusTime = 2500, markers = [], darkMode = false },
    ref
  ) => {
    const globeRef = useRef<HTMLCanvasElement>(null);
    const focusRef = useRef<[number, number] | null>(null);
    const focusTimeout = useRef<NodeJS.Timeout | null>(null);

    const locationToAngles = (lat: number, long: number): [number, number] => {
        const phi = Math.PI - ((long * Math.PI) / 180 - Math.PI / 2);
        const theta = (lat * Math.PI) / 180;
        return [phi, theta];
    };

    const shortestAngularDistance = (from: number, to: number): number => {
        return ((to - from + Math.PI) % (Math.PI * 2)) - Math.PI;
    };

    const normalizeAngle = (angle: number): number => {
        return ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    };

    const setFocus = (lat: number, long: number) => {
        focusRef.current = locationToAngles(lat, long);
    };

    useImperativeHandle(ref, () => ({
        setFocus,
    }));

    const mappedMarkers = useMemo(
        () =>
            markers.map(({ location }) => ({
            location,
            size: 0.07,
            })),
        [markers]
    );

    useEffect(() => {
        let phi = 0;
        let currentPhi = 0;
        let currentTheta = 0;
        let focusPhi = 0;
        let focusTheta = 0;

        if (!globeRef.current) return;

        const globe = createGlobe(globeRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: darkMode ? 1 : 0,
            diffuse: 2,
            opacity: 0.9,
            mapSamples: 16000,
            mapBrightness: darkMode ? 1.5 : 4,
            baseColor: darkMode ? [0, 0, 0] : [1, 1, 1],
            markerColor: [0.1, 0.8, 1],
            glowColor: darkMode ? [0.3, 0.3, 0.3] : [0.2118, 0.4039, 0.9686],
            markers: mappedMarkers,
            onRender: (state) => {
            if (focusRef.current) {
                if (!focusTimeout.current) {
                focusTimeout.current = setTimeout(() => {
                    focusRef.current = null;
                    focusTimeout.current = null;
                }, focusTime);
                }
            } else if (focusTimeout.current) {
                clearTimeout(focusTimeout.current);
                focusTimeout.current = null;
            }

            if (!focusRef.current) {
                focusTheta = 0;
                phi += 0.005;
                focusPhi = phi;
            } else {
                [focusPhi, focusTheta] = focusRef.current;
            }

            const deltaPhi = shortestAngularDistance(
                normalizeAngle(currentPhi),
                focusPhi
            );
            currentPhi += deltaPhi * 0.05;
            currentTheta += (focusTheta - currentTheta) * 0.05;
            state.phi = currentPhi;
            state.theta = Math.max(
                -Math.PI / 2,
                Math.min(Math.PI / 2, currentTheta)
            );
            state.width = state.height = width * 2;
            },
        });

        globeRef.current.style.opacity = "1";

        return () => {
            globe.destroy();
            if (focusTimeout.current) clearTimeout(focusTimeout.current);
        };
    }, [width, focusTime, mappedMarkers, darkMode]);

    return (
        <div
            style={{
            width,
            maxWidth: width,
            aspectRatio: "1",
            margin: "auto",
            position: "relative",
            }}
        >
            <canvas
            ref={globeRef}
            style={{
                width: "100%",
                height: "100%",
                cursor: "auto",
                contain: "layout paint size",
                opacity: 0,
                transition: "opacity 1s ease",
            }}
            />
        </div>
    );
  }
);

GlobeComponent.displayName = "Globe";

export default GlobeComponent;
