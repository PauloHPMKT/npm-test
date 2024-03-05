# npm-test

Para poder adicionar projetos, bibliotecas e pacotes no gerenciador de pacotes NPM é bastante simples:

</hr>
* primeiro de tudo é preciso criar um usuário através da página do NPM: 
<a href="https://www.npmjs.com/signup">Acesse o formulário aqui</a>
Obs: recomendo que procure manter ativado algum modo extra de autenticação como autenticação de 2 fatores, ou 
alguma secret key para trazer mais segurança para acessar seu ambiente e subir seus projetos.

- Logo em seguida, em seu terminal será necessário logar na conta do NPM

```sh
$ npm login
  npm notice Log in on https://registry.npmjs.org/
  Login at:
  https://www.npmjs.com/login
  username: **************
  password: **************
```

Ao realizar o primeiro acesso será necessário informar o usuário criado e a senha,
porém uma vez habilitada a opção do 2FA será necessário validar seu acesso atraves
do token dinâmico:

```sh
$ npm login
  npm notice Log in on https://registry.npmjs.org/
  Login at:
  https://www.npmjs.com/login?next=/login/cli/c2fc244b-a55e-43b5-9616-c646cf353d3a
  ### Processe um CTRL + click para abrir a tela de autenticação no browser
  ### Após esse processo o login é liberado
  Press ENTER to open in the browser...
```

- Após esses passos você poderá verificar se seu usuario realmente foi logado, para isso utilize o comando:

```sh
$ npm whoami
  ### Esse comando retorna o nome do seu usuário
```

Caso preferir você pode verificar se o path do registry está correto utilizando o comando:

```sh
$ npm config get registry
  ### retorna a url do registry do NPM
  https://registry.npmjs.org/
```

Para configurar o registry caso ele não esteja setado utilize o comando:

```sh
$ npm config set registry https://registry.npmjs.org/
```

- Para publicar seu projeto no registry do npm é importante verificar o nome de seu package, configurações
  como nome do autor do projeto, repositório... Essas informações são importantes para que seu projeto possa
  ser publicado sem problemas. Para realizar esse passo utilize o seguinte comando:

```sh
$ npm publish --access=public
npm notice
npm notice 📦  [package_name]@1.0.1
npm notice === Tarball Contents ===
npm notice 10B  README.md
npm notice 602B package.json
npm notice 368B src/[files]
npm notice === Tarball Details ===
npm notice name:          [package_name]
npm notice version:       1.0.1
npm notice filename:      [package_name]-1.0.1.tgz
npm notice package size:  771 B
npm notice unpacked size: 1.1 kB
npm notice shasum:        470ead2ae814adad5d67802c443e988d8aabe82a
npm notice integrity:     sha512-TbEf/Br2iL8ng[...]fEWW/zhfJshZA==
npm notice total files:   4
npm notice
npm notice Publishing to https://registry.npmjs.org/ with tag latest and public access
Authenticate your account at:
https://www.npmjs.com/auth/cli/1e7d56f8-6c23-46de-9646-b1590d3c0d1c
Press ENTER to open in the browser...
+ [package_name]@1.0.1
```

E pronto, seu pacote, projeto ou biblioteca já estará publicado em seu repositório NPM.
