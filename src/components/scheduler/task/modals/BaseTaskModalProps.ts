export interface BaseTaskModalProps {
    closeModal: () => void;
    top: string;
    left: string;
    forwardedRef: React.RefObject<HTMLDivElement>;
}