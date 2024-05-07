interface ButtonProps {
    children: React.ReactNode;
    onClick: () => any;
    styles?: string;
}

export const Button = (props: ButtonProps) => {
    const { children, onClick, styles = "" } = props;
    
    return (
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    )
}