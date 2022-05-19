import { useState, useEffect } from "react";
import { Table } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../../config/api";
import { CompanyDetailsType } from "../../types/CompanyDetailsType";
import { savePhone } from "../../config/store/phoneDetails";
import GoBackButton from "../../components/GoBackButton";
import store from "../../config/store";

export default function CompanyDetails(): JSX.Element {
  const [companyDetails, setCompanyDetails] = useState<CompanyDetailsType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch: typeof store.dispatch = useDispatch();

  useEffect(() => {
    api.get("phone_numbers").then(({ data }) => {
      setCompanyDetails(
        data.filter(
          (company: CompanyDetailsType) =>
            company.company_id === Number(params.companyId)
        )
      );
      setIsLoading(false);
    });
  }, [params.companyId]);

  const columns = [
    {
      title: "Number",
      dataIndex: "id",
      className: "number-column",
      onCell: (record: CompanyDetailsType) => {
        return {
          onClick: () => {
            const phone = {
              number: String(record.id),
              type: record.type,
            };
            dispatch(savePhone(phone));
            navigate(`/numbers/${record.id}`);
          },
        };
      },
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
        dataSource={companyDetails}
        pagination={false}
      />
    </>
  );
}
