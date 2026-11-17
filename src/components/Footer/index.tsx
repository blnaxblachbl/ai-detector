import { Button, theme, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";

export function Footer() {
  const { token } = theme.useToken();

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: token.colorBgContainerDisabled,
      }}
    >
      <div className="max-w-6xl w-full px-3 py-6 mx-auto h-full space-y-3">
        <div className="flex justify-between gap-3">
          <Button
            type="text"
            href="https://github.com/blnaxblachbl/ai-detector"
            className="hover:bg-transparent! p-0!"
            icon={<GithubOutlined />}
            target="_blank"
          >
            Source
          </Button>
          <Button
            type="text"
            href="https://tit.dev"
            className="hover:bg-transparent! p-0!"
            target="_blank"
          >
            Author
          </Button>
        </div>
        <div className="text-center">
          <Typography.Text>
            ©AI detecctor {new Date().getFullYear()}
          </Typography.Text>
        </div>
      </div>
    </footer>
  );
}
