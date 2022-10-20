window.onload = () => {
    // データの生成または読み込み
    const width = 100;
    const height = 100;
    let exampledata = new Float32Array(height * width);

    const xoff = width / 3;
    const yoff = height / 3;

    for ( let y = 0; y <= height; y++ ) {
        for ( let x = 0; x <= width; x++ ) {
            // 距離に基づいて正弦？を計算する
            const x2 = x - xoff;
            const y2 = y - yoff;

            const d = Math.sqrt(x2*x2 + y2*y2);
            const t = Math.sin(d/6.0);

            // 正弦を保存
            exampledata[(y*width)+x] = t;
        }
    }

    plotty.addColorScale(
        "mycolorscale",                             // カラースケール名 
        ["#00ff00", "#0000ff", "#ff0000"],          // カラースケールの内容
        [0, 0.5, 1]                                 // カラースケールのステップのパーセンテージ
    );

    const plot = new plotty.plot({
        canvas: document.getElementById("canvas"),  // 描画するHTML要素
        data: exampledata,                          // 描画するデータ
        width: width, height: height,               // HTML要素のサイズ
        domain: [-1, 1],                            // データが取り得る値（[最小値, 最大値]）
        colorScale: 'mycolorscale'                  // カラースケール
    });

    plot.render();
}