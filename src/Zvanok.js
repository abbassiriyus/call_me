import Table from 'react-bootstrap/Table';
import './klient.css'
function BasicExample() {
  return (
    <div className="klm1">
      <Table bordered hover>
        <thead>
          <tr className='tr'>
            <th>#</th>
            <th>Телефон</th>
            <th>Дата заявки</th>
            <th>Дата заявки</th>
            <th>Страница заявки</th>
            <th>Примечание</th>
            <th>ТЕГ</th>
            <td>:</td>
          </tr>
        </thead>
        <tbody>
          <tr className='tr'>
            <td>001</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>КЛИЕНТ</td>
            <td>:</td>
          </tr>
          <tr className='tr'>
            <td>002</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>
          </tr>
          <tr className='tr'>
            <td>003</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>
          </tr>
          <tr className='tr'>
            <td>004</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>
          </tr>





        </tbody>
      </Table>
    </div>
  );
}

export default BasicExample;