import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as AuthActions from '../../actions/auth.actions';