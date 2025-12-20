// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※

import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Input() {

  const router = useRouter();
  const onNextButton = () => {
    router.push('/component/pages/Mypage');
  }
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [mailAddressErrorMessage, setMailAddressErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setMailAddressErrorMessage("");
    setMailAddress(e.target.value);
    if (e.target.value.length === 0) {
      setMailAddressErrorMessage("メールアドレスを入力してください");
      return
    }
    // checkNextButtonDisabled();
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setPasswordErrorMessage("");
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordErrorMessage("パスワードを入力してください");
      return
    }
    // checkNextButtonDisabled();
  };

  const isNextButtonDisabled = Boolean(
    // 未入力の項目がある場合は非活性にする
    !mailAddress ||
    !password ||
    // エラーメッセージがある場合も非活性にする
    mailAddressErrorMessage ||
    passwordErrorMessage
  );

  return (
    <div className="container">
      <h1>ログイン</h1>

      <Box ml={7}>
        <Box mt={2}>
          <label htmlFor="name">メールアドレス</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder="sample@example.com"
            name="mailAddress"
            value={mailAddress}
            onChange={onChangeMailAddress}
          />
          {mailAddressErrorMessage && (
            <Box className="error-message">{mailAddressErrorMessage}</Box>
          )}
        </Box>

        <Box mt={2}>
          <label htmlFor="name">パスワード</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder=""
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          {passwordErrorMessage && (
            <Box className="error-message">{passwordErrorMessage}</Box>
          )}
        </Box>

        <div className="buttonContainer">
          <Button
            variant="contained"
            className="nextButton"
            onClick={onNextButton}
            disabled={isNextButtonDisabled}>
            ログイン
          </Button>
        </div>
      </Box>
    </div>
  );
}
