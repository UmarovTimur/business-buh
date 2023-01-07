<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'path/to/PHPMailer/src/Exception.php';
   require 'path/to/PHPMailer/src/PHPMailer.php';
   require 'path/to/PHPMailer/src/SMTP.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru' 'phpmailer/language/');
   $mail->IsHTML(true);

   //От кого письмо
   $mail->setForm('asas92asas2@gmail.com', 'Умаров Тимур');
   //Кому отправить
   $mail->addAddress('asas92asas3@gmail.com');
   //Тема письма
   $mail->Subject = 'Тема письма';

   //Рука
   $hand = "Правая";
   if($_POST['hand'] =="left"){
      $hand = "Левая";
   }

   //Тело письма
   $body = '<h1>Встречайте суер письмо</h1>';

   if (trim(!empty($_POST['name']))){
      $body.='<p><strong>Имя:</strong> '.$_POST['name']'</p>';
   }
   if (trim(!empty($_POST['email']))){
      $body.='<p><strong>E-mail:</strong> '.$_POST['email']'</p>';
   }
   if (trim(!empty($_POST['hand']))){
      $body.='<p><strong>Рука:</strong> '.$hand.'</p>';
   }
   if (trim(!empty($_POST['age']))){
      $body.='<p><strong>Возраст:</strong> '.$_POST['age']'</p>';
   }
   if (trim(!empty($_POST['message']))){
      $body.='<p><strong>Сообщение:</strong> '.$_POST['message']'</p>';
   }
   
   $mail->Body = $body;

   //Отправляем
   if (!$mail->send()){
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>















<?php
 
// Токен
  const TOKEN = '341996777:AAHbnuvQib-vHU47i-6hbUrCU9D-qHYekxc';
 
  // ID чата
  const CHATID = '-209253141';
 
  // Массив допустимых значений типа файла.
  $types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf');
 
  // Максимальный размер файла в килобайтах
  // 1048576; // 1 МБ
  $size = 1073741824; // 1 ГБ
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $fileSendStatus = '';
  $textSendStatus = '';
  $msgs = [];
   
  // Проверяем не пусты ли поля с именем и телефоном
  if (!empty($_POST['name']) && !empty($_POST['phone'])) {
     
    // Если не пустые, то валидируем эти поля и сохраняем и добавляем в тело сообщения. Минимально для теста так:
    $txt = "";
     
    // Имя
    if (isset($_POST['name']) && !empty($_POST['name'])) {
        $txt .= "Имя пославшего: " . strip_tags(trim(urlencode($_POST['name']))) . "%0A";
    }
     
    // Номер телефона
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "Телефон: " . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
    }
     
    // Не забываем про тему сообщения
    if (isset($_POST['theme']) && !empty($_POST['theme'])) {
        $txt .= "Тема: " . strip_tags(urlencode($_POST['theme']));
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
    if( isset(json_decode($textSendStatus)->{'ok'}) && json_decode($textSendStatus)->{'ok'} ) {
      if (!empty($_FILES['files']['tmp_name'])) {
     
          $urlFile =  "https://api.telegram.org/bot" . TOKEN . "/sendMediaGroup";
           
          // Путь загрузки файлов
          $path = $_SERVER['DOCUMENT_ROOT'] . '/telegramform/tmp/';
           
          // Загрузка файла и вывод сообщения
          $mediaData = [];
          $postContent = [
            'chat_id' => CHATID,
          ];
       
          for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
            if ($_FILES['files']['name'][$ct] && @copy($_FILES['files']['tmp_name'][$ct], $path . $_FILES['files']['name'][$ct])) {
              if ($_FILES['files']['size'][$ct] < $size && in_array($_FILES['files']['type'][$ct], $types)) {
                $filePath = $path . $_FILES['files']['name'][$ct];
                $postContent[$_FILES['files']['name'][$ct]] = new CURLFile(realpath($filePath));
                $mediaData[] = ['type' => 'document', 'media' => 'attach://'. $_FILES['files']['name'][$ct]];
              }
            }
          }
       
          $postContent['media'] = json_encode($mediaData);
       
          $curl = curl_init();
          curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
          curl_setopt($curl, CURLOPT_URL, $urlFile);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt($curl, CURLOPT_POSTFIELDS, $postContent);
          $fileSendStatus = curl_exec($curl);
          curl_close($curl);
          $files = glob($path.'*');
          foreach($files as $file){
            if(is_file($file))
              unlink($file);
          }
      }
      echo json_encode('SUCCESS');
    } else {
      echo json_encode('ERROR');
      // 
      // echo json_decode($textSendStatus);
    }
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}