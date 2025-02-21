import { OrderButton } from "@/components/articlelistpage/OrderButton";
import ButtonBar from "@/components/ButtonBar";

export default function ArticleListNavBar() {
  return (
    <ButtonBar align={"end"}>
      <OrderButton orderBy={undefined}>Date</OrderButton>
      <OrderButton orderBy={"LIKES"}>Likes</OrderButton>
      <OrderButton orderBy={"CATEGORY"}>Category</OrderButton>
    </ButtonBar>
  );
}
