MySQL 的主從同步（Master-Slave Replication）是一種數據複製機制，允許一個或多個從庫（Slave）從主庫（Master）獲取數據的更新。這種機制常用於數據備份、讀寫分離以提高性能，以及在不同地理位置分布的系統之間同步數據。

### **MySQL 主從同步的工作原理：**

1. **二進制日誌（Binary Log）**：
    - 主庫將所有更改（如 INSERT、UPDATE、DELETE 操作）記錄到二進制日誌中。這些日誌記錄了數據更改的事件，從庫可以讀取這些事件來複製數據。
2. **中繼日誌（Relay Log）**：
    - 從庫連接到主庫，並從主庫的二進制日誌中讀取事件，然後將這些事件寫入自己的中繼日誌。
3. **SQL執行緒（SQL Thread）**：
    - 從庫有一個 SQL 執行緒，負責讀取中繼日誌中的事件並在從庫上執行這些事件，從而將更改應用到自己的數據庫中。

### **如何設定 MySQL 主從同步：**

### 在主庫上的設定：

1. **配置二進制日誌和服務器ID**：
    - 編輯 MySQL 配置檔案（通常是 **`/etc/my.cnf`** 或 **`/etc/mysql/my.cnf`**），在 **`[mysqld]`** 部分添加以下配置：
        
        ```python
        pythonCopy code
        [mysqld]
        log-bin=mysql-bin
        server-id=1
        
        ```
        
    - **`server-id`** 必須是唯一的正整數，用於區分復制集群中的每個服務器。
2. **創建一個用於復制的 MySQL 用戶**：
    - 登錄到 MySQL 服務器，創建一個專用於復制的用戶並賦予它復制的權限：
        
        ```sql
        sqlCopy code
        CREATE USER 'replica'@'%' IDENTIFIED BY 'password';
        GRANT REPLICATION SLAVE ON *.* TO 'replica'@'%';
        
        ```
        
3. **查看二進制日誌文件和位置**：
    - 執行以下命令以獲取當前二進制日誌文件名和位置，這將用於配置從庫：
        
        ```sql
        sqlCopy code
        SHOW MASTER STATUS;
        
        ```
        

### 在從庫上的設定：

1. **配置服務器ID**：
    - 同樣編輯 MySQL 配置檔案，在 **`[mysqld]`** 部分設定一個唯一的 **`server-id`**，但與主庫不同：
        
        ```csharp
        csharpCopy code
        [mysqld]
        server-id=2
        
        ```
        
2. **配置從庫與主庫同步**：
    - 在從庫的 MySQL 環境中，使用先前從 **`SHOW MASTER STATUS;`** 獲取的文件名和位置來配置與主庫的同步：
        
        ```sql
        sqlCopy code
        CHANGE MASTER TO
        MASTER_HOST='master_ip_address',
        MASTER_USER='replica',
        MASTER_PASSWORD='password',
        MASTER_LOG_FILE='記錄從 SHOW MASTER STATUS 獲取的文件名',
        MASTER_LOG_POS=記錄位置;
        
        ```
        
3. **啟動復制過程**：
    - 在從庫上，啟動復制過程：
        
        ```sql
        sqlCopy code
        START SLAVE;
        ```
        
4. **檢查復制狀態**：
    - 執行以下命令以確認復制運行正常：
        
        ```sql
        sqlCopy code
        SHOW SLAVE STATUS\G
        
        ```
        
    - 確保 **`Slave_IO_Running`** 和 **`Slave_SQL_Running`** 都顯示為 **`Yes`**。

以上步驟概述了設置 MySQL 主從同步的基本過程。在實際部署時，您可能需要根據具體情況調整配置，如考慮數據安全性、網絡配置和性能優化等。