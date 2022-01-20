import React from "react";
import axios from "axios";
import DivGeneral, {
  ModalSignUp,
  DivName,
  List,
  DivList,
  ListSign,
  Describe,
  ListDescribe,
  BtnDelete,
  DeletModal,
  Button,
  BtnClean
} from "./styled";

const UserList = () => {

  const [loading, setLoading] = React.useState<any>(true);
  const [data, setData] = React.useState<any>([]);
  const [deleteUser, setDeleteUser] = React.useState(false);
  const [deleteAll, setDeleteAll] = React.useState(false)

  React.useEffect(() => {
    if (deleteUser || deleteAll || !deleteUser || !deleteAll) {
      console.log('entrou ?')

      const url = `https://games-dd788-default-rtdb.firebaseio.com/.json`;
      axios.get(url).then((res) => {
        setData(Object.entries(res.data));
        setLoading(false);
      });
    }
  }, [deleteAll, deleteUser]);

  data.sort(function (a: any, b: any) {
    if (a[1].name < b[1].name) {
      return -1;
    } else {
      return true;
    }
  });

  const Delete = (id: string) => {
    const url = `https://games-dd788-default-rtdb.firebaseio.com/${id}/.json`;
    axios.delete(url);
    setDeleteUser(true)
  }

  const CleanUsers = () => {
    const url = `https://games-dd788-default-rtdb.firebaseio.com/.json`;
    axios.delete(url);
    setDeleteAll(true)
  }

  function age(year: number, month: number, day: number) {
    const date = new Date
    const actualYear = date.getFullYear()
    const actualMonth = date.getMonth() + 1
    const actual = date.getDate()

      year = +year
      month = +month
      day = +day


    let actualAge = actualYear - year

    if (actualMonth < month || actualMonth == month && actual < day) {
      actualAge--;
    }

    return actualAge < 0 ? 0 : actualAge;
  }

  return (
    <>
      <DivGeneral>
        {loading ? (
          <img className="Loading" src="../assets/loading-buffering.gif" />
        ) : (
          <>
            {deleteUser || deleteAll ? (
              <DeletModal className='errorSend'>
                <div>
                  <span>{deleteUser ? 'Usuario deletado com sucesso!' : deleteAll && 'Usuarios excluidos com sucesso!'}</span>
                  <Button onClick={() => {
                    window.location.reload()
                  }}>Ok</Button>
                </div>
              </DeletModal>
            ) : (
              <>
                <BtnClean onClick={() => CleanUsers()}>Limpar tabela</BtnClean>
                <ModalSignUp>
                  <DivName>
                    <Describe marginLeft="25px">Nome</Describe>
                    <Describe>Sobrenome</Describe>
                    <Describe display="none">Altura</Describe>
                    <Describe display="none">Data de nascimento</Describe>
                    <Describe>idade</Describe>
                    <Describe>Ações</Describe>
                  </DivName>
                  <DivList>
                    {data.map((item: any) => {
                      return (
                        <List>
                          <ListDescribe>{item[1].name}</ListDescribe>
                          <ListDescribe>{item[1].surname}</ListDescribe>
                          <ListDescribe>
                            {item[1].height} cm
                          </ListDescribe>
                          <ListDescribe>
                            {item[1].bornDate.split('-')[2] + '/' + item[1].bornDate.split('-')[1] + '/' + item[1].bornDate.split('-')[0]}
                          </ListDescribe>
                          <ListDescribe>{
                            age(
                              parseInt(item[1].bornDate.split('-')[0]),
                              parseInt(item[1].bornDate.split('-')[1]),
                              parseInt(item[1].bornDate.split('-')[2])
                            )
                          }</ListDescribe>
                          <BtnDelete onClick={() => Delete(item[0])}>deletar</BtnDelete>
                        </List>
                      );
                    })}
                  </DivList>
                </ModalSignUp>
              </>
            )}
          </>
        )}
      </DivGeneral>
    </>
  );
};

export default UserList;
