
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">

                    <li class="nav-item"><a href="/" class="nav-link 
                    <?php if($_SERVER['PHP_SELF'] == "/index.php"){
                        echo "inactive";
                    } 
                    ?>" aria-current="page">配對</a></li>


                    <li class="nav-item"><a href="/social" class="nav-link <?php if($_SERVER['PHP_SELF'] == "/social.php"){
                        echo "inactive";
                    } 
                    ?>" >社群</a></li>


                    <li class="nav-item"><a href="#" class="nav-link">+</a></li>

                    <li class="nav-item"><a href="/chat" class="nav-link <?php if($_SERVER['PHP_SELF'] == "/chat.php"){
                        echo "inactive";
                    } 
                    ?> ">聊天</a></li>


                    <li class="nav-item"><a href="/my" class="nav-link <?php if($_SERVER['PHP_SELF'] == "/my.php"){
                        echo "inactive";
                    } 
                    ?>">我的</a></li>


                </ul>
                </header>
  