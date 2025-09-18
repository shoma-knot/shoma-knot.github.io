---
title: PRVAE-VC2+ (submitted to ICASSP 2026)
layout: page_min
---

# Paper

PRVAE-VC2+: Improving PRVAE-VC2 Training With Time-Invariant and Time-Variant Data Augmentations  
<u>Shoma Kanno</u>, Kou Tanaka, Hirokazu Kameoka, Takuhiro Kaneko, Yuto Kondo, Toshie Matsui

# Audio Samples

## Clean Input

<div id="selector-container">

<label for="clean-src-selector">Source Speaker:</label>
<select name="clean-src" id="clean-src-selector">

<option value="5">p294(female)</option>
<option value="7">p303(female)</option>
<option value="6">p334(male)</option>
<option value="8">p360(male)</option>
</select>

-->

<label for="clean-tgt-selector">Target Speaker:</label>
<select name="clean-tgt" id="clean-tgt-selector">

<option value="5">p294(female)</option>
<option value="7">p303(female)</option>
<option value="6">p334(male)</option>
<option value="8">p360(male)</option>
</select>

</div>

<div id="clean-table-container">

  <table class="demo" border="1">
    <tbody>
      <tr>
        <th>X</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','X',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','X',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','X',2)"/></td>
      </tr>
      <tr>
        <th>B</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','B',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','B',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','B',2)"/></td>
      </tr>
      <tr>
        <th>P</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','P',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','P',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','P',2)"/></td>
      </tr>
    </tbody>
  </table>

Ablation study1

  <table class="demo" border="1">
    <tbody>
      <tr>
        <th>A1</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A1',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A1',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A1',2)"/></td>
      </tr>
      <tr>
        <th>A2</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A2',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A2',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A2',2)"/></td>
      </tr>
      <tr>
        <th>A3</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A3',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A3',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A3',2)"/></td>
      </tr>
      <tr>
        <th>A4</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A4',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A4',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A4',2)"/></td>
      </tr>
      <tr>
        <th>A5</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A5',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A5',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A5',2)"/></td>
      </tr>
      <tr>
        <th>A6</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A6',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A6',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','A6',2)"/></td>
      </tr>
    </tbody>
  </table>

Ablation study2

  <table class="demo" border="1">
    <tbody>
      <tr>
        <th>BF</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','BF',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','BF',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','BF',2)"/></td>
      </tr>
      <tr>
        <th>PF</th>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','PF',0)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','PF',1)"/></td>
        <td><input type="image" src="../../assets/demo/play.svg" onclick="play('clean','PF',2)"/></td>
      </tr>
    </tbody>
  </table>

</div>

<script src="./script.js"></script>

<style>
    table.demo {
      width: auto;
    }
    table.demo>tbody>tr>th,
    table.demo>tbody>tr>td {
      width: 80px;
      min-width: 80px;
      max-width: 80px;
      height: 50px;
      text-align: center;
      vertical-align: center;
    }
</style>
