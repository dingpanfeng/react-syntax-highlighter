import createLanguageAsyncLoader from './create-language-async-loader';
export default {
  abap: createLanguageAsyncLoader('abap', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_abap" */ 'refractor/lang/abap.js')
  ),
  abnf: createLanguageAsyncLoader('abnf', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_abnf" */ 'refractor/lang/abnf.js')
  ),
  actionscript: createLanguageAsyncLoader('actionscript', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_actionscript" */ 'refractor/lang/actionscript.js')
  ),
  ada: createLanguageAsyncLoader('ada', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ada" */ 'refractor/lang/ada.js')
  ),
  apacheconf: createLanguageAsyncLoader('apacheconf', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_apacheconf" */ 'refractor/lang/apacheconf.js')
  ),
  apl: createLanguageAsyncLoader('apl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_apl" */ 'refractor/lang/apl.js')
  ),
  applescript: createLanguageAsyncLoader('applescript', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_applescript" */ 'refractor/lang/applescript.js')
  ),
  arduino: createLanguageAsyncLoader('arduino', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_arduino" */ 'refractor/lang/arduino.js')
  ),
  arff: createLanguageAsyncLoader('arff', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_arff" */ 'refractor/lang/arff.js')
  ),
  asciidoc: createLanguageAsyncLoader('asciidoc', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_asciidoc" */ 'refractor/lang/asciidoc.js')
  ),
  asm6502: createLanguageAsyncLoader('asm6502', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_asm6502" */ 'refractor/lang/asm6502.js')
  ),
  aspnet: createLanguageAsyncLoader('aspnet', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_aspnet" */ 'refractor/lang/aspnet.js')
  ),
  autohotkey: createLanguageAsyncLoader('autohotkey', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_autohotkey" */ 'refractor/lang/autohotkey.js')
  ),
  autoit: createLanguageAsyncLoader('autoit', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_autoit" */ 'refractor/lang/autoit.js')
  ),
  bash: createLanguageAsyncLoader('bash', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_bash" */ 'refractor/lang/bash.js')
  ),
  basic: createLanguageAsyncLoader('basic', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_basic" */ 'refractor/lang/basic.js')
  ),
  batch: createLanguageAsyncLoader('batch', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_batch" */ 'refractor/lang/batch.js')
  ),
  bison: createLanguageAsyncLoader('bison', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_bison" */ 'refractor/lang/bison.js')
  ),
  bnf: createLanguageAsyncLoader('bnf', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_bnf" */ 'refractor/lang/bnf.js')
  ),
  brainfuck: createLanguageAsyncLoader('brainfuck', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_brainfuck" */ 'refractor/lang/brainfuck.js')
  ),
  bro: createLanguageAsyncLoader('bro', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_bro" */ 'refractor/lang/bro.js')
  ),
  c: createLanguageAsyncLoader('c', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_c" */ 'refractor/lang/c.js')
  ),
  cil: createLanguageAsyncLoader('cil', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_cil" */ 'refractor/lang/cil.js')
  ),
  clike: createLanguageAsyncLoader('clike', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_clike" */ 'refractor/lang/clike.js')
  ),
  clojure: createLanguageAsyncLoader('clojure', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_clojure" */ 'refractor/lang/clojure.js')
  ),
  cmake: createLanguageAsyncLoader('cmake', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_cmake" */ 'refractor/lang/cmake.js')
  ),
  coffeescript: createLanguageAsyncLoader('coffeescript', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_coffeescript" */ 'refractor/lang/coffeescript.js')
  ),
  cpp: createLanguageAsyncLoader('cpp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_cpp" */ 'refractor/lang/cpp.js')
  ),
  crystal: createLanguageAsyncLoader('crystal', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_crystal" */ 'refractor/lang/crystal.js')
  ),
  csharp: createLanguageAsyncLoader('csharp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_csharp" */ 'refractor/lang/csharp.js')
  ),
  csp: createLanguageAsyncLoader('csp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_csp" */ 'refractor/lang/csp.js')
  ),
  cssExtras: createLanguageAsyncLoader('cssExtras', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_cssExtras" */ 'refractor/lang/css-extras.js')
  ),
  css: createLanguageAsyncLoader('css', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_css" */ 'refractor/lang/css.js')
  ),
  d: createLanguageAsyncLoader('d', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_d" */ 'refractor/lang/d.js')
  ),
  dart: createLanguageAsyncLoader('dart', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_dart" */ 'refractor/lang/dart.js')
  ),
  diff: createLanguageAsyncLoader('diff', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_diff" */ 'refractor/lang/diff.js')
  ),
  django: createLanguageAsyncLoader('django', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_django" */ 'refractor/lang/django.js')
  ),
  dnsZoneFile: createLanguageAsyncLoader('dnsZoneFile', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_dnsZoneFile" */ 'refractor/lang/dns-zone-file.js')
  ),
  docker: createLanguageAsyncLoader('docker', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_docker" */ 'refractor/lang/docker.js')
  ),
  ebnf: createLanguageAsyncLoader('ebnf', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ebnf" */ 'refractor/lang/ebnf.js')
  ),
  eiffel: createLanguageAsyncLoader('eiffel', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_eiffel" */ 'refractor/lang/eiffel.js')
  ),
  ejs: createLanguageAsyncLoader('ejs', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ejs" */ 'refractor/lang/ejs.js')
  ),
  elixir: createLanguageAsyncLoader('elixir', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_elixir" */ 'refractor/lang/elixir.js')
  ),
  elm: createLanguageAsyncLoader('elm', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_elm" */ 'refractor/lang/elm.js')
  ),
  erb: createLanguageAsyncLoader('erb', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_erb" */ 'refractor/lang/erb.js')
  ),
  erlang: createLanguageAsyncLoader('erlang', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_erlang" */ 'refractor/lang/erlang.js')
  ),
  flow: createLanguageAsyncLoader('flow', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_flow" */ 'refractor/lang/flow.js')
  ),
  fortran: createLanguageAsyncLoader('fortran', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_fortran" */ 'refractor/lang/fortran.js')
  ),
  fsharp: createLanguageAsyncLoader('fsharp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_fsharp" */ 'refractor/lang/fsharp.js')
  ),
  gcode: createLanguageAsyncLoader('gcode', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_gcode" */ 'refractor/lang/gcode.js')
  ),
  gedcom: createLanguageAsyncLoader('gedcom', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_gedcom" */ 'refractor/lang/gedcom.js')
  ),
  gherkin: createLanguageAsyncLoader('gherkin', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_gherkin" */ 'refractor/lang/gherkin.js')
  ),
  git: createLanguageAsyncLoader('git', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_git" */ 'refractor/lang/git.js')
  ),
  glsl: createLanguageAsyncLoader('glsl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_glsl" */ 'refractor/lang/glsl.js')
  ),
  gml: createLanguageAsyncLoader('gml', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_gml" */ 'refractor/lang/gml.js')
  ),
  go: createLanguageAsyncLoader('go', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_go" */ 'refractor/lang/go.js')
  ),
  graphql: createLanguageAsyncLoader('graphql', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_graphql" */ 'refractor/lang/graphql.js')
  ),
  groovy: createLanguageAsyncLoader('groovy', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_groovy" */ 'refractor/lang/groovy.js')
  ),
  haml: createLanguageAsyncLoader('haml', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_haml" */ 'refractor/lang/haml.js')
  ),
  handlebars: createLanguageAsyncLoader('handlebars', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_handlebars" */ 'refractor/lang/handlebars.js')
  ),
  haskell: createLanguageAsyncLoader('haskell', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_haskell" */ 'refractor/lang/haskell.js')
  ),
  haxe: createLanguageAsyncLoader('haxe', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_haxe" */ 'refractor/lang/haxe.js')
  ),
  hcl: createLanguageAsyncLoader('hcl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_hcl" */ 'refractor/lang/hcl.js')
  ),
  hpkp: createLanguageAsyncLoader('hpkp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_hpkp" */ 'refractor/lang/hpkp.js')
  ),
  hsts: createLanguageAsyncLoader('hsts', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_hsts" */ 'refractor/lang/hsts.js')
  ),
  http: createLanguageAsyncLoader('http', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_http" */ 'refractor/lang/http.js')
  ),
  ichigojam: createLanguageAsyncLoader('ichigojam', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ichigojam" */ 'refractor/lang/ichigojam.js')
  ),
  icon: createLanguageAsyncLoader('icon', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_icon" */ 'refractor/lang/icon.js')
  ),
  inform7: createLanguageAsyncLoader('inform7', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_inform7" */ 'refractor/lang/inform7.js')
  ),
  ini: createLanguageAsyncLoader('ini', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ini" */ 'refractor/lang/ini.js')
  ),
  io: createLanguageAsyncLoader('io', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_io" */ 'refractor/lang/io.js')
  ),
  j: createLanguageAsyncLoader('j', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_j" */ 'refractor/lang/j.js')
  ),
  java: createLanguageAsyncLoader('java', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_java" */ 'refractor/lang/java.js')
  ),
  javadoc: createLanguageAsyncLoader('javadoc', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_javadoc" */ 'refractor/lang/javadoc.js')
  ),
  javadoclike: createLanguageAsyncLoader('javadoclike', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_javadoclike" */ 'refractor/lang/javadoclike.js')
  ),
  javascript: createLanguageAsyncLoader('javascript', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_javascript" */ 'refractor/lang/javascript.js')
  ),
  javastacktrace: createLanguageAsyncLoader('javastacktrace', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_javastacktrace" */ 'refractor/lang/javastacktrace.js')
  ),
  jolie: createLanguageAsyncLoader('jolie', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jolie" */ 'refractor/lang/jolie.js')
  ),
  jq: createLanguageAsyncLoader('jq', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jq" */ 'refractor/lang/jq.js')
  ),
  jsExtras: createLanguageAsyncLoader('jsExtras', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsExtras" */ 'refractor/lang/js-extras.js')
  ),
  jsTemplates: createLanguageAsyncLoader('jsTemplates', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsTemplates" */ 'refractor/lang/js-templates.js')
  ),
  jsdoc: createLanguageAsyncLoader('jsdoc', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsdoc" */ 'refractor/lang/jsdoc.js')
  ),
  json: createLanguageAsyncLoader('json', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_json" */ 'refractor/lang/json.js')
  ),
  json5: createLanguageAsyncLoader('json5', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_json5" */ 'refractor/lang/json5.js')
  ),
  jsonp: createLanguageAsyncLoader('jsonp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsonp" */ 'refractor/lang/jsonp.js')
  ),
  jsx: createLanguageAsyncLoader('jsx', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsx" */ 'refractor/lang/jsx.js')
  ),
  julia: createLanguageAsyncLoader('julia', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_julia" */ 'refractor/lang/julia.js')
  ),
  keyman: createLanguageAsyncLoader('keyman', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_keyman" */ 'refractor/lang/keyman.js')
  ),
  kotlin: createLanguageAsyncLoader('kotlin', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_kotlin" */ 'refractor/lang/kotlin.js')
  ),
  latex: createLanguageAsyncLoader('latex', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_latex" */ 'refractor/lang/latex.js')
  ),
  less: createLanguageAsyncLoader('less', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_less" */ 'refractor/lang/less.js')
  ),
  lilypond: createLanguageAsyncLoader('lilypond', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_lilypond" */ 'refractor/lang/lilypond.js')
  ),
  liquid: createLanguageAsyncLoader('liquid', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_liquid" */ 'refractor/lang/liquid.js')
  ),
  lisp: createLanguageAsyncLoader('lisp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_lisp" */ 'refractor/lang/lisp.js')
  ),
  livescript: createLanguageAsyncLoader('livescript', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_livescript" */ 'refractor/lang/livescript.js')
  ),
  lolcode: createLanguageAsyncLoader('lolcode', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_lolcode" */ 'refractor/lang/lolcode.js')
  ),
  lua: createLanguageAsyncLoader('lua', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_lua" */ 'refractor/lang/lua.js')
  ),
  makefile: createLanguageAsyncLoader('makefile', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_makefile" */ 'refractor/lang/makefile.js')
  ),
  markdown: createLanguageAsyncLoader('markdown', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_markdown" */ 'refractor/lang/markdown.js')
  ),
  markupTemplating: createLanguageAsyncLoader('markupTemplating', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_markupTemplating" */ 'refractor/lang/markup-templating.js')
  ),
  markup: createLanguageAsyncLoader('markup', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_markup" */ 'refractor/lang/markup.js')
  ),
  matlab: createLanguageAsyncLoader('matlab', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_matlab" */ 'refractor/lang/matlab.js')
  ),
  mel: createLanguageAsyncLoader('mel', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_mel" */ 'refractor/lang/mel.js')
  ),
  mizar: createLanguageAsyncLoader('mizar', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_mizar" */ 'refractor/lang/mizar.js')
  ),
  monkey: createLanguageAsyncLoader('monkey', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_monkey" */ 'refractor/lang/monkey.js')
  ),
  n1ql: createLanguageAsyncLoader('n1ql', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_n1ql" */ 'refractor/lang/n1ql.js')
  ),
  n4js: createLanguageAsyncLoader('n4js', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_n4js" */ 'refractor/lang/n4js.js')
  ),
  nand2tetrisHdl: createLanguageAsyncLoader('nand2tetrisHdl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_nand2tetrisHdl" */ 'refractor/lang/nand2tetris-hdl.js')
  ),
  nasm: createLanguageAsyncLoader('nasm', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_nasm" */ 'refractor/lang/nasm.js')
  ),
  nginx: createLanguageAsyncLoader('nginx', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_nginx" */ 'refractor/lang/nginx.js')
  ),
  nim: createLanguageAsyncLoader('nim', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_nim" */ 'refractor/lang/nim.js')
  ),
  nix: createLanguageAsyncLoader('nix', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_nix" */ 'refractor/lang/nix.js')
  ),
  nsis: createLanguageAsyncLoader('nsis', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_nsis" */ 'refractor/lang/nsis.js')
  ),
  objectivec: createLanguageAsyncLoader('objectivec', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_objectivec" */ 'refractor/lang/objectivec.js')
  ),
  ocaml: createLanguageAsyncLoader('ocaml', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ocaml" */ 'refractor/lang/ocaml.js')
  ),
  opencl: createLanguageAsyncLoader('opencl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_opencl" */ 'refractor/lang/opencl.js')
  ),
  oz: createLanguageAsyncLoader('oz', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_oz" */ 'refractor/lang/oz.js')
  ),
  parigp: createLanguageAsyncLoader('parigp', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_parigp" */ 'refractor/lang/parigp.js')
  ),
  parser: createLanguageAsyncLoader('parser', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_parser" */ 'refractor/lang/parser.js')
  ),
  pascal: createLanguageAsyncLoader('pascal', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_pascal" */ 'refractor/lang/pascal.js')
  ),
  pascaligo: createLanguageAsyncLoader('pascaligo', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_pascaligo" */ 'refractor/lang/pascaligo.js')
  ),
  pcaxis: createLanguageAsyncLoader('pcaxis', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_pcaxis" */ 'refractor/lang/pcaxis.js')
  ),
  perl: createLanguageAsyncLoader('perl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_perl" */ 'refractor/lang/perl.js')
  ),
  phpExtras: createLanguageAsyncLoader('phpExtras', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_phpExtras" */ 'refractor/lang/php-extras.js')
  ),
  php: createLanguageAsyncLoader('php', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_php" */ 'refractor/lang/php.js')
  ),
  phpdoc: createLanguageAsyncLoader('phpdoc', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_phpdoc" */ 'refractor/lang/phpdoc.js')
  ),
  plsql: createLanguageAsyncLoader('plsql', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_plsql" */ 'refractor/lang/plsql.js')
  ),
  powershell: createLanguageAsyncLoader('powershell', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_powershell" */ 'refractor/lang/powershell.js')
  ),
  processing: createLanguageAsyncLoader('processing', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_processing" */ 'refractor/lang/processing.js')
  ),
  prolog: createLanguageAsyncLoader('prolog', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_prolog" */ 'refractor/lang/prolog.js')
  ),
  properties: createLanguageAsyncLoader('properties', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_properties" */ 'refractor/lang/properties.js')
  ),
  protobuf: createLanguageAsyncLoader('protobuf', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_protobuf" */ 'refractor/lang/protobuf.js')
  ),
  pug: createLanguageAsyncLoader('pug', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_pug" */ 'refractor/lang/pug.js')
  ),
  puppet: createLanguageAsyncLoader('puppet', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_puppet" */ 'refractor/lang/puppet.js')
  ),
  pure: createLanguageAsyncLoader('pure', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_pure" */ 'refractor/lang/pure.js')
  ),
  python: createLanguageAsyncLoader('python', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_python" */ 'refractor/lang/python.js')
  ),
  q: createLanguageAsyncLoader('q', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_q" */ 'refractor/lang/q.js')
  ),
  qore: createLanguageAsyncLoader('qore', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_qore" */ 'refractor/lang/qore.js')
  ),
  r: createLanguageAsyncLoader('r', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_r" */ 'refractor/lang/r.js')
  ),
  reason: createLanguageAsyncLoader('reason', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_reason" */ 'refractor/lang/reason.js')
  ),
  regex: createLanguageAsyncLoader('regex', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_regex" */ 'refractor/lang/regex.js')
  ),
  renpy: createLanguageAsyncLoader('renpy', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_renpy" */ 'refractor/lang/renpy.js')
  ),
  rest: createLanguageAsyncLoader('rest', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_rest" */ 'refractor/lang/rest.js')
  ),
  rip: createLanguageAsyncLoader('rip', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_rip" */ 'refractor/lang/rip.js')
  ),
  roboconf: createLanguageAsyncLoader('roboconf', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_roboconf" */ 'refractor/lang/roboconf.js')
  ),
  ruby: createLanguageAsyncLoader('ruby', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_ruby" */ 'refractor/lang/ruby.js')
  ),
  rust: createLanguageAsyncLoader('rust', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_rust" */ 'refractor/lang/rust.js')
  ),
  sas: createLanguageAsyncLoader('sas', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_sas" */ 'refractor/lang/sas.js')
  ),
  sass: createLanguageAsyncLoader('sass', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_sass" */ 'refractor/lang/sass.js')
  ),
  scala: createLanguageAsyncLoader('scala', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_scala" */ 'refractor/lang/scala.js')
  ),
  scheme: createLanguageAsyncLoader('scheme', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_scheme" */ 'refractor/lang/scheme.js')
  ),
  scss: createLanguageAsyncLoader('scss', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_scss" */ 'refractor/lang/scss.js')
  ),
  shellSession: createLanguageAsyncLoader('shellSession', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_shellSession" */ 'refractor/lang/shell-session.js')
  ),
  smalltalk: createLanguageAsyncLoader('smalltalk', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_smalltalk" */ 'refractor/lang/smalltalk.js')
  ),
  smarty: createLanguageAsyncLoader('smarty', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_smarty" */ 'refractor/lang/smarty.js')
  ),
  soy: createLanguageAsyncLoader('soy', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_soy" */ 'refractor/lang/soy.js')
  ),
  splunkSpl: createLanguageAsyncLoader('splunkSpl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_splunkSpl" */ 'refractor/lang/splunk-spl.js')
  ),
  sql: createLanguageAsyncLoader('sql', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_sql" */ 'refractor/lang/sql.js')
  ),
  stylus: createLanguageAsyncLoader('stylus', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_stylus" */ 'refractor/lang/stylus.js')
  ),
  swift: createLanguageAsyncLoader('swift', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_swift" */ 'refractor/lang/swift.js')
  ),
  t4Cs: createLanguageAsyncLoader('t4Cs', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_t4Cs" */ 'refractor/lang/t4-cs.js')
  ),
  t4Templating: createLanguageAsyncLoader('t4Templating', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_t4Templating" */ 'refractor/lang/t4-templating.js')
  ),
  t4Vb: createLanguageAsyncLoader('t4Vb', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_t4Vb" */ 'refractor/lang/t4-vb.js')
  ),
  tap: createLanguageAsyncLoader('tap', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_tap" */ 'refractor/lang/tap.js')
  ),
  tcl: createLanguageAsyncLoader('tcl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_tcl" */ 'refractor/lang/tcl.js')
  ),
  textile: createLanguageAsyncLoader('textile', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_textile" */ 'refractor/lang/textile.js')
  ),
  toml: createLanguageAsyncLoader('toml', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_toml" */ 'refractor/lang/toml.js')
  ),
  tsx: createLanguageAsyncLoader('tsx', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_tsx" */ 'refractor/lang/tsx.js')
  ),
  tt2: createLanguageAsyncLoader('tt2', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_tt2" */ 'refractor/lang/tt2.js')
  ),
  twig: createLanguageAsyncLoader('twig', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_twig" */ 'refractor/lang/twig.js')
  ),
  typescript: createLanguageAsyncLoader('typescript', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_typescript" */ 'refractor/lang/typescript.js')
  ),
  vala: createLanguageAsyncLoader('vala', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_vala" */ 'refractor/lang/vala.js')
  ),
  vbnet: createLanguageAsyncLoader('vbnet', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_vbnet" */ 'refractor/lang/vbnet.js')
  ),
  velocity: createLanguageAsyncLoader('velocity', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_velocity" */ 'refractor/lang/velocity.js')
  ),
  verilog: createLanguageAsyncLoader('verilog', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_verilog" */ 'refractor/lang/verilog.js')
  ),
  vhdl: createLanguageAsyncLoader('vhdl', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_vhdl" */ 'refractor/lang/vhdl.js')
  ),
  vim: createLanguageAsyncLoader('vim', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_vim" */ 'refractor/lang/vim.js')
  ),
  visualBasic: createLanguageAsyncLoader('visualBasic', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_visualBasic" */ 'refractor/lang/visual-basic.js')
  ),
  wasm: createLanguageAsyncLoader('wasm', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_wasm" */ 'refractor/lang/wasm.js')
  ),
  wiki: createLanguageAsyncLoader('wiki', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_wiki" */ 'refractor/lang/wiki.js')
  ),
  xeora: createLanguageAsyncLoader('xeora', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_xeora" */ 'refractor/lang/xeora.js')
  ),
  xojo: createLanguageAsyncLoader('xojo', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_xojo" */ 'refractor/lang/xojo.js')
  ),
  xquery: createLanguageAsyncLoader('xquery', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_xquery" */ 'refractor/lang/xquery.js')
  ),
  yaml: createLanguageAsyncLoader('yaml', () =>
    import(/* webpackChunkName: "react-syntax-highlighter_languages_refractor_yaml" */ 'refractor/lang/yaml.js')
  )
};
