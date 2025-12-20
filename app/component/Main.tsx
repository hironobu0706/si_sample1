// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Main() {

  const router = useRouter();

  const onNextButton = () => {
    router.push('/component/pages/Input');
  }

  return (
    <div className="container">
      <h1>トップ</h1>
      <p>
        test用申し込みページです。
        ここで申し込み前の注意事項などを記載する。
      </p>
      <div className="buttonContainer">
        <Button variant="contained" className="nextButton" onClick={onNextButton}>次へ</Button>
      </div>
    </div>
  );
}
