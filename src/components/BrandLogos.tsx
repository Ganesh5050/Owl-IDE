import React from "react";

// VS Code Icon - Multi-colored official logo look
export const VSCodeLogo = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none">
        <title>Visual Studio Code</title>
        {/* Official VS Code paths */}
        <path d="M23.9999 6.78452L21.3967 4.25703L17.7479 7.79975L13.1118 7.42436L3.90372 13.9213L1.08272 11.7583L0 12.8122L3.93043 15.8274L17.7479 16.2028L21.3967 19.7455L24 17.218V6.78452H23.9999Z" fill="#007ACC" />
        <path d="M17.7479 16.2028L24 17.218V6.78452L17.7479 7.79975V16.2028Z" fill="#1F9CF0" />
        <path d="M3.90378 15.8274L13.1118 16.5714V7.42436L3.90378 8.16834L0 11.2181V12.7842L3.90378 15.8274Z" fill="#0065A9" />
    </svg>
);

export const VsCodeIcon = VSCodeLogo;

export const FigmaIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
        <title>Figma</title>
        <path d="M8.333 0C5.572 0 3.333 2.239 3.333 5c0 2.761 2.239 5 5 5h3.334c0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5s-2.239 5-5 5c-2.761 0-5 2.239-5 5v5c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5h5V0H8.333z" />
    </svg>
);

export const NotionIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
        <title>Notion</title>
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.307V6.355c0-.747-.374-1.027-1.215-1.027l-14.523.84c-.841.047-.935.607-.935 1.12zm4.857.98c.187 0 .374.047.514.28l5.23 8.358V8.922c0-.374.233-.514.513-.56.28-.047.56.093.56.467v10.122c0 .28-.186.513-.513.513-.187 0-.374-.046-.514-.28L9.574 10.29v5.885c0 .374-.233.514-.513.56-.28.047-.56-.093-.56-.467V8.735c0-.28.187-.514.514-.514z" />
    </svg>
);

export const VercelIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
);

export const LinearIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
        <title>Linear</title>
        <path d="M12 0C5.378 0 0 5.378 0 12s5.378 12 12 12 12-5.378 12-12S18.622 0 12 0zm1.764 16.732L8.268 11.236l5.496 5.496zM15.732 8.268L11.236 12.764l4.496-4.496z" />
    </svg>
);

export const FramerIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
        <title>Framer</title>
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
);
