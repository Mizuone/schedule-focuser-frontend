interface CardProps {
    children: React.ReactNode;
    cardTitle: string;
}

export const Card = (props: CardProps) => {
    const { children, cardTitle } = props;

    return (
        <div className="flex flex-col h-full tile rounded shadow m-2">
            <div className="flex flex-col h-full">
                <h2 className="text-2xl px-2 py-1">{cardTitle}</h2>
                <hr />
                <div className="flex h-full bg-gray-50">
                    {children}
                </div>
            </div>
        </div>
    )
}