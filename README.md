# NOTE
record coding road
**`update-alternatives --config java`** 命令時，系統會列出所有已安裝的 Java 版本以及它們的路徑。每個版本旁邊會有一個選擇號碼（Selection number）。你可以透過輸入這個號碼來選擇想要設為預設的 Java 版本。這裡是一個選擇過程的例子：

1. 開啟終端機，執行命令：
    
    ```bash
    bashCopy code
    update-alternatives --config java
    
    ```
    
2. 系統會顯示類似以下的輸出：
    
    ```bash
    bashCopy code
    There are 2 choices for the alternative java (providing /usr/bin/java).
    
      Selection    Path                                            Priority   Status
    ------------------------------------------------------------
    * 0            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      auto mode
      1            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode
      2            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      manual mode
    
    Press <enter> to keep the current choice[*], or type selection number:
    
    ```
    
3. 在提示符號 **`Press <enter> to keep the current choice[*], or type selection number:`** 之後，輸入你想設為預設的 Java 版本旁邊的選擇號碼。比如，如果你想選擇 Java 8，就輸入 **`1`** 然後按下回車鍵。
4. 一旦你做出選擇，系統會更新預設的 Java 版本。你可以再次運行 **`update-alternatives --config java`** 來確認你的選擇已經被設定。

這樣你就成功地選擇了當前用戶的預設 Java 命令版本。這個過程使得管理多個 Java 版本變得簡單，並允許你根據不同的需求選擇不同的 Java 環境。

### **延伸用法**

**`update-alternatives`** 不僅僅用於管理 Java 版本。它可以用於管理系統上任何需要多個版本共存的程序。例如，編輯器（vim、nano）、Python、gcc 等。

以下是一些常用的 **`update-alternatives`** 命令及其用法：

- **查看所有配置的替代方案**:
    
    ```bash
    bashCopy code
    sudo update-alternatives --get-selections
    
    ```
    
- **配置某個程序的默認版本**:
    
    ```bash
    bashCopy code
    sudo update-alternatives --config <name>
    
    ```
    
    這裡的 **`<name>`** 是程序名，比如 **`java`**。這個命令會列出所有可用的選項，並允許你選擇哪個版本作為默認。
    
- **手動添加一個新的替代方案**:
    
    ```bash
    bashCopy code
    sudo update-alternatives --install /usr/bin/<name> <name> /path/to/program <priority>
    
    ```
    
    這裡的 **`<name>`** 是程序名，**`/path/to/program`** 是程序的完整路徑，**`<priority>`** 是在選擇默認程序時考慮的優先級。數字越大，優先級越高。
    
- **移除一個替代方案**:
    
    ```bash
    bashCopy code
    sudo update-alternatives --remove <name> /path/to/program
    
    ```
    
    這裡的 **`<name>`** 是程序名，**`/path/to/program`** 是程序的完整路徑。
    

### **注意事項**

雖然 **`update-alternatives`** 是一個強大的工具，可以幫助管理系統上的程序版本，但不當使用可能會導致系統配置混亂。在使用它進行更改之前，確保你理解其工作原理和影響。特別是在手動添加新替代方案時，確保指定的路徑和優先級是正確的。
