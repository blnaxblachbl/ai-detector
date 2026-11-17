import { theme, Typography } from "antd";

export function Header() {
  const { token } = theme.useToken();

  return (
    <header
      className="h-(--header-height) w-full"
      style={{ backgroundColor: token.colorBgContainerDisabled }}
    >
      <div className="max-w-6xl mx-auto h-full px-3 flex items-center">
        <Typography.Text className="text-lg! font-bold">AI Detector</Typography.Text>
      </div>
    </header>
  );
}
