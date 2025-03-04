import { BookmarkBlockPlainTextAdapterExtension } from '@blocksuite/affine-block-bookmark';
import { CodeBlockPlainTextAdapterExtension } from '@blocksuite/affine-block-code';
import { DividerBlockPlainTextAdapterExtension } from '@blocksuite/affine-block-divider';
import {
  EmbedFigmaBlockPlainTextAdapterExtension,
  EmbedGithubBlockPlainTextAdapterExtension,
  EmbedLinkedDocBlockPlainTextAdapterExtension,
  EmbedLoomBlockPlainTextAdapterExtension,
  EmbedSyncedDocBlockPlainTextAdapterExtension,
  EmbedYoutubeBlockPlainTextAdapterExtension,
} from '@blocksuite/affine-block-embed';
import { LatexBlockPlainTextAdapterExtension } from '@blocksuite/affine-block-latex';
import { ListBlockPlainTextAdapterExtension } from '@blocksuite/affine-block-list';
import { ParagraphBlockPlainTextAdapterExtension } from '@blocksuite/affine-block-paragraph';
import type { ExtensionType } from '@blocksuite/block-std';

import { DatabaseBlockPlainTextAdapterExtension } from '../../../database-block/adapters/plain-text.js';

export const defaultBlockPlainTextAdapterMatchers: ExtensionType[] = [
  ParagraphBlockPlainTextAdapterExtension,
  ListBlockPlainTextAdapterExtension,
  DividerBlockPlainTextAdapterExtension,
  CodeBlockPlainTextAdapterExtension,
  BookmarkBlockPlainTextAdapterExtension,
  EmbedFigmaBlockPlainTextAdapterExtension,
  EmbedGithubBlockPlainTextAdapterExtension,
  EmbedLoomBlockPlainTextAdapterExtension,
  EmbedYoutubeBlockPlainTextAdapterExtension,
  EmbedLinkedDocBlockPlainTextAdapterExtension,
  EmbedSyncedDocBlockPlainTextAdapterExtension,
  LatexBlockPlainTextAdapterExtension,
  DatabaseBlockPlainTextAdapterExtension,
];
