業務管理ポータル v0.7.2 出張承認伺追加 OFFICIAL_LATEST

変更内容
- 2026-09-15時点の業務管理ポータル v0.7.1 を基準に復元
- トップ画面に「出張承認伺」を追加
- 出張承認伺は travel-approval-app を開く
- 商品在庫管理・見積閲覧・出荷依頼・運送依頼・営業倉庫を維持
- 商品名 B は 福建B 表示
- Service Workerは business-portal-* のキャッシュだけを更新
- 出張承認伺側のPWAキャッシュには触れない

GitHubへのアップロード
business-portal-pwa リポジトリ直下の
index.html / manifest.webmanifest / sw.js
をこのZIP内のファイルで上書きしてください。

Commit Summary:
業務管理ポータル v0.7.2 出張承認伺追加
