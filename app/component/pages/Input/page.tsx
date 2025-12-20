// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※

import { Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCustomerStore from "../../store/customerStore";
import { prefArray } from "../../const/pref";

export default function Input() {
  const customer = useCustomerStore((state) => state.customer);
  const setCustomer = useCustomerStore((state) => state.setCustomer);

  const router = useRouter();
  const onBackButton = () => {
    router.push('/');
  }
  const onNextButton = () => {
    setCustomer({
      firstName,
      furigana,
      tel,
      postCode,
      prefectures,
      address,
      mailAddress,
      password,
    })
    router.push('/component/pages/Confirm');
  }


  // 各項目の入力情報
  const [firstName, setFirstName] = useState(customer.firstName || "");
  const [furigana, setFurigana] = useState(customer.furigana || "");
  const [tel, setTel] = useState(customer.tel || "");
  const [postCode, setPostCode] = useState(customer.postCode || "");
  const [prefectures, setPrefectures] = useState(customer.prefectures || "21");
  const [address, setAddress] = useState(customer.address || "");
  const [mailAddress, setMailAddress] = useState(customer.mailAddress || "");
  const [password, setPassword] = useState(customer.password || "");
  // 各項目のエラーメッセージ
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [furiganaErrorMessage, setFuriganaErrorMessage] = useState("");
  const [telErrorMessage, setTelErrorMessage] = useState("");
  const [postCodeErrorMessage, setPostCodeErrorMessage] = useState("");
  const [prefecturesErrorMessage, setPrefecturesErrorMessage] = useState("");
  const [addressErrorMessage, setAddressErrorMessage] = useState("");
  const [mailAddressErrorMessage, setMailAddressErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // onChange
  const onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setFirstNameErrorMessage("");
    setFirstName(e.target.value);
    if (e.target.value.length === 0) {
      setFirstNameErrorMessage("お名前を入力してください");
      return
    }
    // checkNextButtonDisabled();
  };
  const onChangeFurigana = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setFuriganaErrorMessage("");
    setFurigana(e.target.value);
    if (e.target.value.length === 0) {
      setFuriganaErrorMessage("フリガナを入力してください");
      return
    }
    // checkNextButtonDisabled();
  };

  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setTelErrorMessage("");
    setTel(e.target.value);
    if (e.target.value.length === 0) {
      setTelErrorMessage("電話番号を入力してください");
      return
    }
    // checkNextButtonDisabled();
  };

  const onChangePostCode = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setPostCodeErrorMessage("");
    setPostCode(e.target.value);
    if (e.target.value.length === 0) {
      setPostCodeErrorMessage("郵便番号を入力してください");
      return
    }
    // checkNextButtonDisabled();
  };

  const onChangePrefectures = (event: SelectChangeEvent): void => {
    // エラーメッセージの初期化
    setPrefecturesErrorMessage("");
    setPrefectures(event.target.value as unknown as string);
    if (event.target.value === "99") {
      setPrefecturesErrorMessage("都道府県を入力してください");
      return
    }
    // checkNextButtonDisabled();
  };


  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    // エラーメッセージの初期化
    setAddressErrorMessage("");
    setAddress(e.target.value);
    if (e.target.value.length === 0) {
      setAddressErrorMessage("住所を入力してください");
      return
    }
    // checkNextButtonDisabled();
  };

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
    !firstName ||
    !furigana ||
    !tel ||
    !postCode ||
    !address ||
    !mailAddress ||
    !password ||
    // エラーメッセージがある場合も非活性にする
    firstNameErrorMessage ||
    furiganaErrorMessage ||
    telErrorMessage ||
    postCodeErrorMessage ||
    addressErrorMessage ||
    mailAddressErrorMessage ||
    passwordErrorMessage
  );

  useEffect(() => {
    // 初回レンダリング時に次へボタンの活性/非活性制御
    // checkNextButtonDisabled();
  }, []);
  return (
    <div className="container">
      <h1>Input</h1>

      <Box ml={7}>
        <Box mt={2}>
          <label htmlFor="firstName">お名前</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder="てすと太郎"
            name="firstName"
            value={firstName}
            onChange={onChangeFirstName}
          />
          {firstNameErrorMessage && (
            <Box className="error-message">{firstNameErrorMessage}</Box>
          )}

        </Box>

        <Box mt={2}>
          <label htmlFor="name">フリガナ</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder="フリガナ"
            name="furigana"
            value={furigana}
            onChange={onChangeFurigana}
          />
          {furiganaErrorMessage && (
            <Box className="error-message">{furiganaErrorMessage}</Box>
          )}
        </Box>

        <Box mt={2}>
          <label htmlFor="name">性別</label>
          <Box>
            <RadioGroup defaultValue="female" row>
              <FormControlLabel value="female" control={<Radio />} label="男性" />
              <FormControlLabel value="male" control={<Radio />} label="女性" />
              <FormControlLabel value="other" control={<Radio />} label="その他" />
            </RadioGroup>
          </Box>
        </Box>

        <Box mt={2}>
          <label htmlFor="name">電話番号（ハイフンなし）</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder="08012345678"
            name="tel"
            value={tel}
            onChange={onChangeTel}
          />
          {telErrorMessage && (
            <Box className="error-message">{telErrorMessage}</Box>
          )}
        </Box>

        <Box mt={2}>
          <label htmlFor="name">郵便番号（ハイフンなし）</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder="1231234"
            name="postCode"
            value={postCode}
            onChange={onChangePostCode}
          />
          {postCodeErrorMessage && (
            <Box className="error-message">{postCodeErrorMessage}</Box>
          )}
        </Box>

        <Box mt={2}>
          <label htmlFor="name">都道府県</label>
          <Box>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={prefectures}
              onChange={onChangePrefectures}
            >
              {prefArray.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {prefecturesErrorMessage && (
            <Box className="error-message">{prefecturesErrorMessage}</Box>
          )}
        </Box>

        <Box mt={2}>
          <label htmlFor="name">住所</label>
          <TextField
            sx={{ display: "flex", width: 500 }}
            placeholder="市区町村・番地・建物名"
            name="address"
            value={address}
            onChange={onChangeAddress}
          />
          {addressErrorMessage && (
            <Box className="error-message">{addressErrorMessage}</Box>
          )}
        </Box>

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
            className="backButton"
            onClick={onBackButton}>
            戻る
          </Button>
          <Button
            variant="contained"
            className="nextButton"
            onClick={onNextButton}
            disabled={isNextButtonDisabled}>
            入力内容を確認
          </Button>
        </div>
      </Box>
    </div>
  );
}