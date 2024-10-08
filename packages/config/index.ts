import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";

export type EmojiMap = { [key: string]: string };

export interface Config {
  withSpace: boolean;
  // Automatic types ar types that come from automatic commit mesages
  // e.g. fixups, merges, reverts, and versions
  automaticTypes: {
    fixup: string;
    merge: string;
    revert: string;
    version: string;
  };
  conventionalTypes: EmojiMap;
}

const moduleName = "semantic-commit-emoji";
const explorer = cosmiconfig(moduleName, {
  searchPlaces: [
    "package.json",
    `.${moduleName}rc`,
    `.${moduleName}rc.json`,
    `.${moduleName}rc.yaml`,
    `.${moduleName}rc.yml`,
    `.${moduleName}rc.ts`,
    `.${moduleName}rc.mjs`,
    `.${moduleName}rc.js`,
    `${moduleName}.config.ts`,
    `${moduleName}.config.mjs`,
    `${moduleName}.config.js`,
  ],
  loaders: {
    ".ts": TypeScriptLoader(),
    ".mjs": TypeScriptLoader(),
  },
});

const defaultConfig: Config = {
  withSpace: false,
  automaticTypes: {
    fixup: "",
    merge: "twisted_rightwards_arrows",
    revert: "rewind",
    version: "bookmark",
  },
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

  // Deep merge automaticTypes
  config.automaticTypes = Object.assign({}, defaultConfig.automaticTypes, result?.config?.automaticTypes);

  return config;
};
