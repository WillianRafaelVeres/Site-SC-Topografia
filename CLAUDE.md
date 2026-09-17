# Uso da memória Obsidian — Site SC Topografia

Este arquivo define somente como os agentes devem usar a memória Obsidian deste projeto.
Ele não define regras de arquitetura, implementação ou comportamento do site.

## Local da memória

Cofre principal:
`C:\Cerebro_da_IA\SC-Programacao`

Entrada geral:
`C:\Cerebro_da_IA\SC-Programacao\00-SISTEMA\INDEX.md`

Memória deste projeto:
`C:\Cerebro_da_IA\SC-Programacao\01-PROJETOS\Site-SC-Topografia\INDEX.md`

## Antes de trabalhar

1. Leia `00-SISTEMA/INDEX.md`.
2. Identifique que a tarefa pertence ao projeto Site SC Topografia.
3. Leia `01-PROJETOS/Site-SC-Topografia/INDEX.md`.
4. A partir do INDEX, abra somente as notas relacionadas à tarefa atual.
5. Depois consulte o código e a documentação do repositório necessários para executar a tarefa.

## Economia de contexto e tokens

- Nunca carregue o cofre inteiro.
- Nunca leia todos os projetos por padrão.
- Nunca abra todos os ADRs, bugs ou regras só por precaução.
- Pesquise primeiro e leia somente o necessário.
- Prefira o INDEX do projeto como mapa para localizar a informação.
- Se uma nota não tiver relação clara com a tarefa, não a leia.
- Conhecimento de outro projeto só deve ser consultado quando existir relação real com a tarefa atual.

## Fonte de verdade

- O repositório é a fonte de verdade do código atual.
- O Obsidian é a memória permanente de contexto, decisões e conhecimento confirmado.
- Se código, documentação e Obsidian divergirem, não escolha silenciosamente: identifique a divergência antes de usar a informação como verdade.

## Como alimentar o Obsidian

Ao terminar uma tarefa, avalie se surgiu conhecimento permanente que será útil no futuro.

Registrar somente quando houver conhecimento durável, por exemplo:

- decisão importante e seu motivo;
- regra de negócio confirmada;
- arquitetura ou integração confirmada;
- bug difícil ou recorrente e sua solução;
- risco, limitação ou comportamento importante;
- conhecimento que evitará que outro agente precise redescobrir a mesma coisa.

Não registrar:

- cada commit;
- cada pequena alteração;
- código copiado;
- logs extensos;
- detalhes temporários;
- informações óbvias que podem ser encontradas rapidamente no próprio código.

## Organização da memória

- Conhecimento específico deste projeto deve ficar dentro de `01-PROJETOS/Site-SC-Topografia/`.
- Conhecimento realmente compartilhado entre projetos pode ficar em `02-COMPARTILHADO/`.
- Não duplicar a mesma informação em vários projetos.
- Usar links `[[...]]` somente quando houver relação real.
- Manter INDEXes curtos; eles servem como mapa, não como depósito de conteúdo.

## Regra de segurança da memória

Não invente nem grave no Obsidian uma conclusão incerta como se fosse fato.
Registre somente conhecimento confirmado pelo código, testes, documentação confiável ou decisão explícita do usuário.

## Finalização e commit

Ao concluir qualquer edição solicitada no projeto:

1. finalize a alteração;
2. faça as verificações necessárias para garantir que a tarefa foi concluída;
3. confira `git status` e `git diff`;
4. faça commit somente dos arquivos alterados pela tarefa atual;
5. use uma mensagem de commit curta e objetiva descrevendo o que foi feito.

Regras:

- O commit deve ser feito ao final de cada tarefa concluída.
- Não incluir no commit alterações antigas ou não relacionadas que já estavam no repositório.
- Não criar commit vazio quando nenhuma alteração tiver sido feita.
- Se não for possível realizar o commit, informar claramente o motivo ao usuário.

