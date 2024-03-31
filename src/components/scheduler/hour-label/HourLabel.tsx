
interface HourLabelProps {
    hour: string;
    endLabel?: boolean;
}

export const HourLabel = (props: HourLabelProps) => {
    const { hour, endLabel } = props;

    return (
        <div className={`${endLabel ? "" : 'h-12 border-r-2 border-gray-100'} relative pr-2 w-16 text-xs text-right text-gray-400`}>
            <span className="relative -top-2">{hour}</span>
        </div>
  )
}