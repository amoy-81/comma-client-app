export type TabItem = {
  id: string;
  label: string;
};

export interface TabsWithAnimationProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
}
