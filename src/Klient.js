import Table from 'react-bootstrap/Table';
import './klient.css'
function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Имя и Фамилия</th>
          <th>Телефон</th>
          <th>Соц сеть</th>
          <th>Е-маил</th>
          <th>Примечание</th>
          <th>ТЕГ</th>
          <th>:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Максим Галкиин</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>КЛИЕНТ</td>
          <th>:</th>
        </tr>
        <tr>
          <td>002</td>
          <td>Алла Пугачева</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>-ЛИД</td>
          <th>:</th>
        </tr>
        <tr>
          <td>003</td>
          <td>Алла Пугачева</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>-ЛИД</td>
          <th>:</th>
        </tr>
        <tr>
            <td>004</td>
            <td>Хабиб</td>
            <td>+7 999 888 77 66</td>
            <td>vk.com/id422424</td>
            <td>mymail@pochta.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <th>:</th>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;