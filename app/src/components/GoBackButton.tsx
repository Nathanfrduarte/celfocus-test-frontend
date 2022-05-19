import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

export default function GoBackButton(): JSX.Element {
  const navigate = useNavigate();

  return (
    <PageHeader
      data-testid="go-back-button"
      title="Go Back"
      className="site-page-header"
      onBack={() => navigate(-1)}
    />
  );
}
