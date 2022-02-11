import './App.css'
import Litem from './Litem'

function App() {
  return (
  <>
  <a href="https://slippi.gg/downloads" target="_blank"><button>Download Slippi</button></a>
  <a href="https://vimm.net/vault/7818" target="_blank"><button>Download Melee ISO</button></a>
  <a href="https://slippi.gg/downloads" target="_blank"><button>Download Slippi</button></a>
  <a href="https://discord.gg/S2hhkSSGEN" target="_blank"><button>Join our Discord server</button></a>
  <h1>Melee Israel leaderboard</h1>
  <div class="container">
		<div class="leaderboard">
			<div class="head">
				<i class="fas fa-crown"></i>
			</div>
      <ul>
          <li id="no">Rank | Name ⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀score</li>
        </ul>
			<div class="body">

				<ol>
          <Litem PlayerName="Roiロイ" points="0"/>
				</ol>
			</div>
		</div>
	</div>
  <h5></h5>
  </>
  )
}

export default App
