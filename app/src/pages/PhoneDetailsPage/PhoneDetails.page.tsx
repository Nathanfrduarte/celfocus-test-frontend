import { useState, useEffect } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { PhoneDetailsType } from "../../types/PhoneDetailsType";
import GoBackButton from "../../components/GoBackButton";

export default function PhoneDetails(): JSX.Element {
  const [phoneDetails, setPhoneDetails] = useState<PhoneDetailsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { phone } = useSelector((state: any) => state.phoneDetails);

  useEffect(() => {
    setPhoneDetails([phone]);
    setIsLoading(false);
  }, [phone]);

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      className: "number-column",
    },
    {
      title: "Type",
      dataIndex: "type",
      className: "type-column",
    },
  ];

  return (
    <>
      <GoBackButton />
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={phoneDetails}
        pagination={false}
      />
    </>
  );
}
