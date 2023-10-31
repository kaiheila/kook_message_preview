import React, { useEffect, useRef, useState } from 'react';
import { json2fragment } from './utils/fragment/json2fragment';
import { mark2fragment } from './utils/fragment/mark2fragment';
import { markdownParse } from './utils/parse/markdownParse';
import useExternal from './useExternal';
import '@kaiheila/kui-lib/lib/index.css';
import './styles/index.less';

function MessagePreview(props) {
  const { type = 'card', content = [], theme = 'light' } = props;

  const status = useExternal(
    'https://assets-1304063016.cos.ap-beijing.myqcloud.com/markdown-parse.0.0.10.js',
    {
      js: {
        async: true,
      },
    },
  );

  // markdown解析方法加载成功后再渲染组件
  if (status !== 'ready') {
    return null;
  }

  if (type === 'card') {
    return (
      <div className={`card-message-preview theme-${theme}`}>
        {json2fragment(
          typeof content === 'string' ? JSON.parse(content) : content,
        )}
      </div>
    );
  }

  if (type === 'kmd') {
    return (
      <span className={`markdown-preview theme-${theme}`}>
        {mark2fragment(markdownParse(content))}
      </span>
    );
  }

  return null;
}

export default MessagePreview;
