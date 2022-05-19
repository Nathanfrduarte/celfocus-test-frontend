import { useState, useEffect } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";
import { CompanyType } from "../../types/CompanyType";

export default function HomePage(): JSX.Element {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    api.get("companies").then(({ data }) => {
      setCompanies(data);
      setIsLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Company Name",
      dataIndex: "name",
      className: "name-column",
      onCell: (record: CompanyType) => {
        return {
          onClick: () => {
            navigate(`/companies/${record.id}`);
          },
        };
      },
    },
    {
      title: "Vatin",
      dataIndex: "vatin",
      className: "vatin-column",
    },
  ];

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={companies}
      pagination={false}
    />
  );
}
