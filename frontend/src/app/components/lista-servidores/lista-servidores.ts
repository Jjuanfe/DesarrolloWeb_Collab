import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../../services/servidores';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-servidores.html',
  styleUrl: './lista-servidores.css'
})
export class Servidores implements OnInit {
  servidores: any[] = [];

  constructor(private servidoresService: ServidoresService) {}

  ngOnInit(): void {
    this.servidoresService.getServidores().subscribe({
      next: (data) => this.servidores = data,
      error: (err) => console.error('Error al obtener servidores:', err)
    });
  }
}