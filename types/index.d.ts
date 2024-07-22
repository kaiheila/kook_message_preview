import React from 'react';

export interface MessagePreviewProps {
  /** 消息类型 */
  type?: 'card' | 'kmd' | undefined;
  /** 消息主题色 */
  theme?: 'light' | 'dark' | undefined;
  /** 消息内容 */
  content?: any[] | string;
  /** 解析kmarkdown方法的 资源文件地址 */
  external?: string;
  /** 是否在卡片过长时折叠卡片 */
  collapsed?: boolean;
  /** 折叠卡片的高度限制，超过此高度会折叠卡片，单位为 px */
  hideMoreHeight?: number;
  /** 自定义@用户节点渲染 */
  customMetUserRender?: (user_id: string) => React.ReactNode;
  /** 自定义@角色节点渲染 */
  customRoleRender?: (role_id: string) => React.ReactNode;
  /** 自定义@频道节点渲染 */
  customChannelRender?: (channel_id: string) => React.ReactNode;
  /** 自定义视频事件处理器 */
  customVideoEvents?: {
    onPlay: (cardModule: object) => void;
    onDownload: (cardModule: object) => void;
  };
  /** 自定义音频事件处理器 */
  customAudioEvents?: {
    onPlay: (cardModule: object) => void;
    onDownload: (cardModule: object) => void;
  };
  /** 自定义文件事件处理器 */
  customFileEvents?: {
    onDownload: (cardModule: object) => void;
  };
  /** 自定义按钮点击事件 */
  customButtonClick?: (cardModule: object) => void;
  /** 自定义图片点击事件 */
  customImageClick?: (cardModule: object) => void;
}

declare function MessagePreview(props: MessagePreviewProps): React.JSX.Element;
