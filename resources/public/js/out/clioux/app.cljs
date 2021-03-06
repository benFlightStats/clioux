(ns ^:figwheel-no-load clioux.app
  (:require [clioux.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback core/mount-components)

(weasel/connect "ws://localhost:9001" :verbose true)

(core/init!)
