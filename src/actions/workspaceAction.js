"use server";
import { editWorkspaceService } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

async function handleEditDeleteWorkSpace(id, data) {
  console.log("workspace edit : ", data, id);
  const workspace = { workspaceId: id, workspaceName: data.workspaceName };
  const res = await editWorkspaceService(workspace);
  console.log("after login", res);
  //call real time
  revalidateTag("workspaceName");
}

export { handleEditDeleteWorkSpace };
