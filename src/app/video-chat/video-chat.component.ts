import { Component, ViewChild } from '@angular/core';
declare var Peer: any;

@Component({
    selector : 'app-video-chat',
    templateUrl : './video-chat.component.html'
})



export class VideoChatComponent{
  @ViewChild('myvideo') myVideo: any;
  
    peer;
    anotherid;
    mypeerid;
    
    constructor() {
      
      
    }
    
    ngOnInit() {
      let video = this.myVideo.nativeElement;
      
      this.peer = new Peer({key: 'lwjd5qra8257b9'});
      setTimeout(() => {
        this.mypeerid = this.peer.id;
      },3000);
      
      this.peer.on('connection', function(conn) {
    conn.on('data', function(data){
      console.log(data);
    });
  });
   
   var n = <any>navigator;
      
      n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
      
      this.peer.on('call', function(call) {
        
        n.getUserMedia({video: true, audio: true}, function(stream) {
          

          call.answer(stream);
          call.on('stream', function(remotestream){
            video.srcObject = remotestream;
            video.play();
          })
        }, function(err) {
          console.log('Failed to get stream', err);
        })
      })
    }
    
    connect(){
      var conn = this.peer.connect(this.anotherid);
  conn.on('open', function(){
    conn.send('Message from that id');
  });
    }
    
    videoconnect(){
      let video = this.myVideo.nativeElement;
      var localvar = this.peer;
      var fname = this.anotherid;
      
      var n = <any>navigator;
      
      n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
      
      n.getUserMedia({video: true, audio: true}, function(stream) {
        var call = localvar.call(fname, stream);
        call.on('stream', function(remotestream) {
          video.srcObject = remotestream;
          video.play();
        })
      }, function(err){
        console.log('Failed to get stream', err);
      })
    }
}