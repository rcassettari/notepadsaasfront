app.factory('notepadServices', ['$http', 'locationServices', function($http, locationServices) {

        function listar(callback) {
            $http({
                method:'GET',
                url: 'https://notepadsaas31451.herokuapp.com/nota/'
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        function pesquisarPor(nome, callback) {
            $http({
                method:'GET',
                url:'https://notepadsaas31451.herokuapp.com/nota/titulo/' + nome
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        function salvar(nota, callback) {
            $http({
                method:'POST',
                url:'https://notepadsaas31451.herokuapp.com/nota/',
                data:JSON.stringify(nota)
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        return {
            listar:listar,
            salvar:salvar,
            pesquisarPor:pesquisarPor
        };
    }])