// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const router = useRouter();
  const onNextButton = () => {
    router.push('/component/pages/Login');
  }

  return (
    <div className="container">
      <h1>Complete</h1>

      <div className="buttonContainer">
        <Button
          variant="contained"
          className="nextButton"
          onClick={onNextButton}>
          ログインページへ
        </Button>
      </div>
    </div>
  );
}
