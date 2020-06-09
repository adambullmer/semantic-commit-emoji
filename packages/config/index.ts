import { cosmiconfig } from "cosmiconfig";
const explorer = cosmiconfig("semantic-commit-emoji");

type EmojiMap = { [key: string]: string };

interface Config {
  withSpace: boolean;
  emojiMap: EmojiMap;
}

const defaultConfig: Config = {
  withSpace: false,
  emojiMap: {
    feat: "sparkles",
    fix: "bug",
    docs: "pencil",
    refactor: "recycle",
    style: "art",
    test: "microscope",
    perf: "zap",
    hotfix: "ambulance",
    locale: "globe_with_meridians",
    ci: "construction_worker",
    chore: "wrench",
    types: "label",
  },
};

export = async (path?: string): Promise<Config> => {
  const result = await (path === undefined ? explorer.search() : explorer.load(path));
  const config = Object.assign({}, defaultConfig, result?.config as Config);

  return config;
};
