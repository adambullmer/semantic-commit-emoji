import { cosmiconfig } from "cosmiconfig";

export type EmojiMap = { [key: string]: string };

export interface Config {
  withSpace: boolean;
  conventionalTypes: EmojiMap;
}

const explorer = cosmiconfig("semantic-commit-emoji");

const defaultConfig: Config = {
  withSpace: false,
  conventionalTypes: {
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

export default async (path?: string): Promise<Config> => {
  const result = await (path === undefined ? explorer.search() : explorer.load(path));
  const config = Object.assign({}, defaultConfig, result?.config as Config);

  return config;
};
