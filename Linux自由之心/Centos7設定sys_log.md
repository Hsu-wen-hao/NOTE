在 CentOS 7 中，**`systemd`**和 **`journald`**用於管理系統服務和日誌。 **`journald`**收集並管理來自系統服務、核心、以及其他來源的日誌。預設情況下，**`journald`**的設定檔位於 **`/etc/systemd/journald.conf`**，其預設設定通常足以滿足大多數需求，但也可以根據需要進行調整。

以下是一些 **`journald`**預設設定的關鍵點：

1. **儲存**：預設情況下，日誌儲存在系統記憶體和磁碟上。這是透過**`Storage=`**設定控制的，預設值通常是**`auto`**，這意味著如果**`/var/log/journal`**目錄存在，則日誌會持久化保存到磁碟上。如果目錄不存在，則日誌僅保存在記憶體中，並在重新啟動後遺失。
2. **日誌大小**：**`journald`**預設限制磁碟上日誌檔案的總大小。這是透過 **`SystemMaxUse=`**和 **`RuntimeMaxUse=`**設定控制的，預設值依賴系統的可用磁碟空間。
3. **日誌保留期限**：**`journald`**允許透過**`MaxRetentionSec=`**設定來定義日誌的保留時間，但預設這個設定是未指定的，日誌保留期限由磁碟空間限制決定。
4. **日誌壓縮**：預設情況下，舊的日誌檔案會被壓縮以節省空間。
5. **轉送日誌**：**`journald`**預設不會將日誌訊息轉送到傳統的**`/var/log/messages`**、**`/var/log/secure`**等日誌檔案中，但可以透過設定**`ForwardToSyslog=yes`**來啟用此功能。
### **常见的配置选项包括：**

- **`Storage`**：定义日志数据的存储位置。可以是 **`volatile`**（仅存储在内存中）、**`persistent`**（存储在磁盘上）、**`auto`**（如果 **`/var/log/journal`** 目录存在，则持久存储，否则存储在内存中）和 **`none`**（不存储日志数据）。
- **`SystemMaxUse`**：设置 **`/var/log/journal`** 目录可以使用的最大空间。
- **`SystemKeepFree`**：设置 **`/var/log/journal`** 目录保持空闲的最小空间。
- **`MaxRetentionSec`**：设置日志的最大保留时间。
- **`MaxFileSec`**：设置单个日志文件的最大生命周期，在此期间后会被旋转。

### **設定檔範例：**

```
iniCopy code
[Journal]
Storage=persistent
SystemMaxUse=500M
SystemKeepFree=1G
MaxRetentionSec=1month
MaxFileSec=1week

```

這個配置範例告訴 **`systemd-journald`**：

-持久地儲存日誌（如果 **`/var/log/journal`**存在的話）。
-保留最多 500MB 的日誌資料。
-保證至少有 1GB 的空間保持空閒。
-保留最長一個月的日誌資料。
-日誌檔案每週旋轉一次。

### **日誌儲存持續時間**
關於日誌儲存的持續時間，**`journald`**預設不會基於時間刪除舊日誌，而是基於上面配置的磁碟空間限制來管理舊日誌。如果你設定了 **`MaxRetentionSec`**，那麼 **`journald`**會根據這個時間限制來刪除舊的日誌資料。如果未設定這些限制，日誌將會一直累積直到達到磁碟空間限制。在預設配置下，通常沒有設定時間限制，日誌檔案的保留時間完全取決於系統活動量以及配置的空間限制。
若要檢視或修改 **`journald`**的配置，您可以編輯 **`/etc/systemd/journald.conf`**檔案。修改配置後，需要重新啟動 **`journald`**服務以使變更生效：

```bash
bashCopy code
sudo systemctl restart systemd-journald

```