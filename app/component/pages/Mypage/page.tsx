// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import useCustomerStore from "../../store/customerStore";
import { prefArray } from "../../const/pref";

export default function Mypage() {
  const router = useRouter();
  const customer = useCustomerStore((state) => state.customer);

  const onBackButton = () => {
    router.push('/component/pages/Login');
  }
  console.log("customer:", customer);
  const foundPref = prefArray.find((item) => {
    return item.value === customer.prefectures
  });

  return (
    <div className="container">
      <h1>Myページ</h1>
      <Box ml={7}>
        <table className="confirmTable">
          <tbody>
            <tr>
              <td>お名前</td>
              <td>{customer.firstName}</td>
            </tr>
            <tr>
              <td>フリガナ</td>
              <td>{customer.furigana}</td>
            </tr>
            <tr>
              <td>電話番号</td>
              <td>{customer.tel}</td>
            </tr>
            <tr>
              <td>郵便番号</td>
              <td>{customer.postCode}</td>
            </tr>
            <tr>
              <td>住所</td>
              <td>{foundPref?.label}{customer.address}</td>
            </tr>
            <tr>
              <td>メールアドレス</td>
              <td>{customer.mailAddress}</td>
            </tr>
            <tr>
              <td>パスワード</td>
              <td>********</td>
            </tr>
          </tbody>
        </table>
      </Box>

      <div className="buttonContainer">
        <Button
          variant="contained"
          className="nextButton"
          onClick={onBackButton}>
          ログアウト
        </Button>
      </div>
    </div>
  );
}