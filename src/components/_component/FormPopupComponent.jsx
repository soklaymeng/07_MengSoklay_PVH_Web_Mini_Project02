"use client";
import { handleEditDeleteWorkSpace } from "@/actions/workspaceAction";
import { useForm } from "react-hook-form";

const FormPopupComponent = ({ id }) => {
  const { register, handleSubmit } = useForm();

  const handleEditWorkspace = (data) => {
    console.log("Mer data", data);
    document.getElementById(`my_modal_${id}`).showModal();
    const updateWorkspace = handleEditDeleteWorkSpace(id, data);
    console.log("Update workspace", updateWorkspace);
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={handleEditWorkspace}>
        open modal
      </button>
      <dialog id={`my_modal_${id}`} className="modal">
        <form onSubmit={handleSubmit(handleEditWorkspace)}>
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update workspace</h3>
            <input
              {...register("workspaceName")}
              type="text"
              name="workspaceName"
              placeholder="workspace Name"
              className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />
            <div>
              <button className="bg-yellow-200 p-2 rounded-md " type="submit">
                Update
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default FormPopupComponent;
