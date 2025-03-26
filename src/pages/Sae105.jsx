import React from 'react';
import styled from 'styled-components';

const TPWrapper = styled.div`
  margin-bottom: 30px;
  background-color: #292929;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  color: #d3d3d3;
  line-height: 1.6;

  h2 {
    font-size: 20px;
    color: #fbc02d;
    margin-bottom: 15px;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  figure {
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .code {
    background-color: #2b2b2b; /* Arrière-plan plus foncé */
    border-radius: 5px;
    padding: 10px;
    color: #ff9800; /* Couleur orange pour le texte */
    font-family: monospace;
    margin: 10px 0;
    white-space: pre-wrap; /* Conserve les sauts de ligne */
    word-wrap: break-word; /* Permet de couper les mots longs */
  }

  blockquote {
    margin: 0;
    padding-left: 10px;
    border-left: 3px solid #ff9800; /* Accent orange pour la bordure */
  }
`;

const Sae105 = () => {
  return (
    <TPWrapper>
      <h2>I. Introduction</h2>
      <figure>
        <figcaption>Voici le schéma du réseau privé virtuel :</figcaption>
        <img
          src={`${process.env.PUBLIC_URL}/sae105/schema_réseau_prive.png`}
          alt="Schéma réseau privé"
          title="Schéma réseau privé"
        />
      </figure>
      <p>
        Dans ce réseau, nous retrouvons 3 machines :
      </p>
      <ul>
        <li>
          Les machines nommées <strong>machine1</strong> et <strong>machine2</strong> possèdent chacune une seule interface réseau sur le réseau interne nommé <em>intnet</em>.
        </li>
        <li>
          La machine nommée <strong>routeur</strong> possède deux interfaces réseaux : une sur le réseau interne <em>intnet</em> et l'autre configurée en NAT.
        </li>
      </ul>
      <p>
        La machine <strong>routeur</strong> aura accès à Internet grâce à la passerelle NAT, tandis que les machines <strong>machine1</strong> et <strong>machine2</strong> accéderont à Internet via la machine <strong>routeur</strong>. Vous pouvez ajouter autant de machines que vous le souhaitez.
        <br />
        Pour en savoir plus, consultez cet article :{' '}
        <a href="https://www.it-connect.fr/comprendre-les-differents-types-de-reseaux-virtualbox/" target="_blank" rel="noopener noreferrer">
          Comprendre les différents types de réseaux dans VirtualBox
        </a>.
      </p>

      <h2>II. Configuration des cartes réseaux</h2>
      <p>
        Pour ce réseau, nous utilisons Oracle VM VirtualBox. Voici des tutoriels pour configurer VirtualBox et Debian :
      </p>
      <ul>
        <li>
          <a href="annexe/configuration-machine-virtuel.pdf" target="_blank" rel="noopener noreferrer">
            Configuration de VirtualBox
          </a>
        </li>
        <li>
          <a href="annexe/installation-debian.pdf" target="_blank" rel="noopener noreferrer">
            Installation de Debian
          </a>
        </li>
      </ul>
      <figure>
        <img
          src={`${process.env.PUBLIC_URL}/sae105/configuration_reseaux.png`}
          alt="Configuration des cartes réseaux"
          title="Configuration des cartes réseaux"
        />
        <figcaption>
          Configurez les machines en réseau interne et ajoutez une carte réseau en NAT pour la machine routeur.
        </figcaption>
      </figure>

      <h2>III. Configuration de la machine routeur</h2>
      <p>
        <strong>A - Fixer l'adresse IP :</strong> Créez un fichier dans <code>/etc/network/interfaces/</code> et ajoutez :
      </p>
      <div className="code">
        auto &lt;nom de l'interface&gt;<br />
        iface &lt;nom de l'interface&gt; inet static<br />
        <blockquote>
          address 192.168.2.1<br />
          netmask 255.255.255.0<br />
          network 192.168.2.0<br />
          broadcast 192.168.2.255
        </blockquote>
      </div>
      <p>
        <strong>B - Activer le transfert des paquets IPv4 :</strong> Éditez le fichier <code>/etc/sysctl.conf</code> et enlevez le <code>#</code> devant <code>net.ipv4.ip_forward=1</code>.
      </p>
      <p>
        <strong>C - Configurer les règles iptables :</strong>
      </p>
      <div className="code">
        sudo apt install iptables<br />
        <br />
        #!/bin/sh<br />
        /usr/sbin/iptables -t nat -A POSTROUTING -o &lt;nom interface NAT&gt; -j MASQUERADE<br />
        /usr/sbin/iptables -A FORWARD -i &lt;nom interface interne&gt; -j ACCEPT
      </div>
      <p>
        Donnez les droits d'exécution au fichier avec :
      </p>
      <div className="code">sudo chmod +x /etc/network/if-pre-up.d/iptables</div>

      <h2>IV. Configuration des autres machines</h2>
      <p>
        Configurez un fichier dans <code>/etc/network/interfaces/</code> avec l'adresse IP dans le même réseau que le routeur :
      </p>
      <div className="code">
        auto &lt;nom de l'interface&gt;<br />
        iface &lt;nom de l'interface&gt; inet static<br />
        <blockquote>
          address 192.168.2.101<br />
          netmask 255.255.255.0<br />
          network 192.168.2.0<br />
          broadcast 192.168.2.255<br />
          gateway 192.168.2.1
        </blockquote>
      </div>
    </TPWrapper>
  );
};

export default Sae105;
