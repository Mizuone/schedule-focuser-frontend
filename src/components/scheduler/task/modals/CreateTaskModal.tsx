import { BaseTaskModalProps } from "./BaseTaskModalProps";

interface CreateTaskModalProps extends BaseTaskModalProps {}

export const CreateTaskModal = (props: CreateTaskModalProps) => {
  const { closeModal, left, top, forwardedRef } = props;

  return (
    <div className="fixed inset-0 w-full top-0 bottom-0">
        <div ref={forwardedRef} className={`fade-in-modal absolute border border-gray-200 bg-white w-64 p-4 shadow-lg`} style={{left: left + 'px', top: top + 'px'}}>
            <p>This is the modal content</p>
            <button onClick={() => closeModal()} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Close</button>
        </div>
    </div>
  )
}