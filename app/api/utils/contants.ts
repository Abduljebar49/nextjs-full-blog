import { NextResponse } from "next/server";


export enum RStatus{
    SUCCESS="successfully fetched",
    UPDATED="successfully updated",
    DELETED="successfully deleted"
}

export function Message(title:string,status:string){
    return `${title} ${status}`
}

export function erMessage(message:string){
    return message
}
// export const SUCCESS = "successfully fetched"
export function AResponse(
  data: any = [],
  message: String = "",
  status: number = 200
) {
  return NextResponse.json(
    {
      data,
      message,
    },
    { status }
  );
}
