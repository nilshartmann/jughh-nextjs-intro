import { OrderButton } from "@/components/articlelistpage/OrderButton";
import ButtonBar from "@/components/ButtonBar";
import { NavButtonBar } from "@/NavButtonBar";

export default function ArticleListNavBar() {
  return (
    <NavButtonBar align={"right"}>
      <ButtonBar>
        <OrderButton orderBy={undefined}>Date</OrderButton>
        <OrderButton orderBy={"LIKES"}>Likes</OrderButton>
        <OrderButton orderBy={"CATEGORY"}>Category</OrderButton>
      </ButtonBar>
    </NavButtonBar>
  );
}
