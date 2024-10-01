import { useState } from "react";
import Button from "../../components/button/Button";
import { useUpdateUserMutation } from "../../integration/redux/apis/userApi";
import { useLazyPresignedUrlQuery } from "../../integration/redux/apis/utilsApi";
import axiosInstance from "../../utilities/axiosInterceptor";

export const Profile = () => {
  const [updateUser] = useUpdateUserMutation();
  const [presignedUrl, { data, isLoading, error }] = useLazyPresignedUrlQuery();

  const [files, setFiles] = useState({
    logo: null,
    // cover_image: null,
  });
  const handleUpdateUser = async () => {
    try {
      const resp = await updateUser({
        name: "Himanshu",
        // profilePicture: string
      });
      console.log({ resp });
    } catch (err) {
      console.error({ err });
    }
  };
  const handleFileChange = async (
    event: any,
    setFieldValue?,
    setFieldError?,
    setFieldTouched?
  ) => {
    const selectedFile = event.target.files[0];
    const fieldName = "logo";

    if (selectedFile?.size > 3 * 1024 * 1024) {
      //   setFieldError(fieldName, 'Max file size is 3mb')
      //   setFieldTouched(fieldName, true, false) // Marks the field as touched but opts out of validation

      event.target.value = "";
      return;
    } else {
      // Clear any existing error if the file size is valid
      //   setFieldError(fieldName, '')
      //   setFieldTouched(fieldName, false)
    }

    setFiles({
      ...files,
      logo: selectedFile,
    });

    const ext = selectedFile?.type?.split("/")?.[1];

    const res: any = await presignedUrl({
      filename: selectedFile.name,
      filepath: "profile",
      filetype: ext == "jpeg" ? "jpg" : ext,
    });

    console.log({ presignedUrl: res?.data?.data?.presignedUrl });

    event.target.value = "";
  };

  return (
    <>
      <input
        type="file"
        id="fileInputL"
        accept={"image/png, image/jpg, image/jpeg, image/gif"}
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      <Button text="upload +" onClick={() => handleUpdateUser()} />

      <Button text="update profile" onClick={() => handleUpdateUser()} />
    </>
  );
};
